import { HeadObjectCommand, PutObjectCommand } from "@aws-sdk/client-s3";
import { config } from "dotenv";
import { readFileSync } from "fs";
import mime from "mime";
import path from "path";
import { createS3Client } from "src/lib/aws";
import { getAllStorageObjectKeys, getObjectMetadata } from "../../lib/aws.js";
import { getWidthAndHeight } from "./getWidthAndHeight.js";

const Bucket = "images.trebeljahr.com";

export function createKey(prefix: string, filepath: string) {
  const filename = path.basename(filepath);
  return path.join(prefix, filename);
}

export async function doesFileExistInS3(filePath: string): Promise<boolean> {
  const command = new HeadObjectCommand({
    Bucket,
    Key: filePath,
  });

  const s3 = createS3Client();

  try {
    await s3.send(command);
    return true;
  } catch (error) {
    console.log((error as Error).name); // Log the error name

    if ((error as Error).name === "NotFound") {
      return false;
    }
    throw error;
  }
}

export async function uploadWithMetadata(
  filepath: string,
  Key: string,
  Metadata: Record<string, string>
) {
  const client = createS3Client();
  const Body = readFileSync(filepath);

  const command = new PutObjectCommand({
    Bucket,
    Key,
    Body,
    ContentType: mime.getType(filepath) || undefined,
    Metadata,
  });

  try {
    return await client.send(command);
  } catch (err) {
    console.error(err);
  }
}

export async function readS3MetadataForAllStorageObjects(prefix: string) {
  const bucketName = process.env.AWS_BUCKET_NAME;
  if (!bucketName) throw new Error("No bucket name provided in .env file");
  const allKeys = await getAllStorageObjectKeys(bucketName, prefix);

  const metadata = await Promise.all(
    allKeys.map((key) => {
      return getObjectMetadata(bucketName, key);
    })
  );

  return metadata;
}

export async function uploadSingleFileToS3(filepath: string, awsPath: string) {
  const key = createKey(awsPath, filepath);

  const data = await getWidthAndHeight(filepath);

  try {
    await uploadWithMetadata(filepath, key, {
      width: String(data?.width),
      height: String(data?.height),
    });
  } catch (error) {
    console.error(error);
  }
}
