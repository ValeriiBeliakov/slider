export interface BuildPaths{
    entry:string
    build:string
    html:string
    public:string
    src:string
}
export type BuildMode='development'|'production';
export interface BuildOptions{
    mode:BuildMode
    port:number
    paths:BuildPaths
    analyzer?: boolean,
}
