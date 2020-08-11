/**
 * minio配置
 */
interface IMinioConfig {
    endPoint: string;
    port: number;
    useSSL: boolean;
    accessKey: string;
    secretKey: string;
    bucketName: string;
}
declare const MINIO_CONFIG: IMinioConfig;
export default MINIO_CONFIG;
