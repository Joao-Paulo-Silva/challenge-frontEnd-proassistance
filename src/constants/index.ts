import type { TFormErrors, TPersonFormsData } from "@/types";

export const genderOptions = [
    { label: 'Mulher cisgênero', value: 'Mulher cisgênero' },
    { label: 'Mulher transgênero', value: 'Mulher transgênero' },
    { label: 'Travesti', value: 'Travesti' },
    { label: 'Homem cisgênero', value: 'Homem cisgênero' },
    { label: 'Homem transgênero', value: 'Homem transgênero' },
    { label: 'Não binário', value: 'Não binário' },
];
export const lgbtqiaOptions = [
    { label: 'Sim', value: 'Sim' },
    { label: 'Não', value: 'Não' },
]
export const ethnicityOptions = [
    { label: 'Branca', value: 'Branca' },
    { label: 'Preta', value: 'Preta' },
    { label: 'Parda', value: 'Parda' },
    { label: 'Indígena', value: 'Indígena' },
    { label: 'Amarela', value: 'Amarela' },
    { label: 'Não declarada', value: 'Não declarada' },
];

export const biologicalSexOptions = [
    { label: 'Feminino', value: 'Feminino' },
    { label: 'Masculino', value: 'Masculino' },
]


export const FormErrors: TFormErrors = {
    nameErr: false,
    dateOfBirthErr: false,
    biologicalSexErr: false,
    ethnicityErr: false,
    idErr: false,
    cpfErr: false,
    neighborhoodErr: false,
    addressErr: false
}

export const PersonFormsData: TPersonFormsData = {
    name: '',
    socialName: '',
    birthDate: '',
    biologicalSex: '',
    gender: '',
    LGBTQIA: '',
    ethnicity: '',
    id: '',
    cpf: '',
    neighborhood: '',
    address: '',
    number: '',
    complement: '',
    phone: '',
    email: ''
}