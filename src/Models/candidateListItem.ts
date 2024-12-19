export interface candidateListItemProps{
    id: string | null, //Incorrect practice. Instead set the original data props as just string and not null
    image: string,
    name: string,
    degree: string,
    skills: string
}