interface IMinioConfig {
    endPoint: string;
    port: number;
    useSSL: boolean;
    accessKey: string;
    secretKey: string;
    bucketName: string;
}
interface IUploader {
    config: IMinioConfig;
    Client: any;
    readFile: Function;
    upload: Function;
    delete: Function;
}
declare class Uploader implements IUploader {
    config: IMinioConfig;
    Client: any;
    constructor(option?: Partial<IMinioConfig>);
    readFile(file: File): Promise<string>;
    setBucketPolicy(): any;
    bucketExists(): Promise<any>;
    getFile(fileUrl: string): any;
    upload(file: any): Promise<any>;
    delete(): void;
}
export default Uploader;
