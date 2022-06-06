export interface IResource {
    id: number,
    name: string,
    designation: string,
    city: string
}

export interface IProject {
    id: number,
    name: string,
    desc: string,
    image: string,
    skills: string[],
    resources: IResource[]
}