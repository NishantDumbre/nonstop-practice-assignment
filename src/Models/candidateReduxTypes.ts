interface CandidateEducation{
    institute: string,
    degree: string,
    percentage: number,
    passout_year: string
}

interface CandidateSkills{
    name: string,
    experience: string
}

export interface CandidateExperience{
    company:string,
    project:string,
    role:string,
    team_size:string,
    duration_from:string,
    duration_to: string
}

export interface CandidateReducerInitialState{
    id: string | null
    profile_picture: string
    name: string,
    address: string,
    phone: number,
    email: string,
    gender: string,
    hobbies: string[] | [],
    education: CandidateEducation[],
    skills: CandidateSkills[],
    experience: CandidateExperience
}