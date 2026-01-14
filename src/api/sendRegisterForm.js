// const FORM_VALUES = {
//     Level: {
//         0: "Nível 0",
//         1: "Nível 1",
//         2: "Nível 2",
//         3: "Nível 3",
//         4: "Nível 4"
//     },
//     Tickets: {
//         1: "Pacote completo",
//         2: "Pacote de bailes",
//         3: "Baile avulso (sexta)",
//         4: "Baile avulso (sábado)",
//         5: "Baile avulso (domingo)"
//     },
//     Compete: {
//         1: "Sim - Leader",
//         2: "Sim - Follower",
//         3: "Não"
//     }
// }

const FORM_LABEL = {
    Email: "Email",
    Name: "Nome",
    Phone: "Telefone",
    // Level: "Nível",
    // Role: "Função",
    // Tickets: "Pacote",
    // Compete: "Competição"
}

function parseFormDataToExcel(data) {
    const excelData = {}

    for (const key in data) {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
            const value = data[key];

            // if (Object.prototype.hasOwnProperty.call(FORM_VALUES, key)) {
            //     excelData[FORM_LABEL[key]] = FORM_VALUES[key][value]
            // } else {
            //     excelData[FORM_LABEL[key]] = value
            // }
            excelData[FORM_LABEL[key]] = value
        }
    }

    return excelData
}

export async function sendRegisterForm(data) {
    const parsedData = parseFormDataToExcel(data)

    const response = await fetch("https://script.google.com/macros/s/AKfycbxDE1s2GLZRTkDqJGq0HyCOkVyR4YUbRFPSiud8wOXSrYF-AGfLmjkfbrcYXB2iOxPWPg/exec", {
        method: "POST",
        body: JSON.stringify(parsedData),
    });

    return await response.json();
}