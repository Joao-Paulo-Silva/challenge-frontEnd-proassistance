/**
 * Formata um número para o formato específico de CPF (Cadastro de Pessoas Físicas) 
 * e retorna o  valor.
 *
 * @param {string} text - O número de CPF a ser formatado.
 *
* @returns {string} - valor formatado.
 */
export function formatCPF(text: string): string {
    text = text.replace(/[^\d]/g, "");
    let cpf: string = ''
    if (text.length <= 3) {
        cpf = text;
    } else if (text.length <= 6) {
        cpf = text.replace(/(\d{3})(\d{0,1})/, "$1.$2");
    } else if (text.length <= 9) {
        cpf = text.replace(/(\d{3})(\d{3})(\d{0,1})/, "$1.$2.$3");
    } else if (text.length <= 11) {
        cpf = text.replace(/(\d{3})(\d{3})(\d{3})(\d{0,2})/, "$1.$2.$3-$4");
    }
    return cpf
}

/**
 * Formata um número para um formato específico de telefone e retorna o valor
 * do formulário.
 *
 * @param {string} text - O número de telefone a ser formatado.
 * 
 * @returns {string} - valor formatado.
 */
export function formatPhone(text: string): string {
    text = text.replace(/[^\d]/g, "");
    let phone: string = ''
    if (text.length < 12) {
        if (text.length > 2 && text.length < 7) {
            phone = text.replace(/(\d{2})/, "($1) ")
        } else if (text.length < 10) {
            phone = text.replace(/(\d{2})(\d{4})/, "($1) $2-")
        } else if (text.length < 11) {
            phone = text.replace(/(\d{2})(\d{4})(\d{4})/, "($1) $2-$3");
        } else {
            phone = text.replace(/(\d{2})(\d{1})(\d{4})(\d{4})/, "($1) $2 $3-$4");
        }
    }

    return phone
}

/**
 * Formata um número de RG para um formato específico e retorna o valor formatado.
 *
 * @param {string} text - O número de RG a ser formatado.
 * @returns {string} - O valor formatado do RG.
 */
export function formatRG(text: string): string{
    text = text.replace(/[^a-zA-Z0-9]/g, '');
    // Mantém apenas os dois primeiros caracteres como letras (se existirem)
    const letters: string = text.replace(/[^a-zA-Z]/g, '');
    const numbers: string = text.replace(/[^0-9]/g, ''); 
    // Retorna a string formatada
    return letters.slice(0, 2).toUpperCase() + numbers;
}