import React from "react";
import Faq from "react-faq-component";

const data = {
    rows: [
        {
            title: "Exemplo de Dúvida 01",
            content: `Exemplo de texto para a dúvida 01`,
        },
        {
            title: "Exemplo de Dúvida 02",
            content: `Exemplo de texto para a dúvida 02`,    
        },{
            title: "Exemplo de Dúvida 03",
            content: `Exemplo de texto para a dúvida 03`,
        },
        {
            title: "Exemplo de Dúvida 04",
            content: `Exemplo de texto para a dúvida 04`,    
        },
        
    ],
};

const styles = {
    // bgColor: 'white',
    titleTextColor: "f1f1f1",
    rowTitleColor: "f1f1f1",
    // rowContentColor: 'grey',
    // arrowColor: "red",
};

const config = {
    animate: true,
    // arrowIcon: "V",
    // tabFocus: true
};

const Faqs = () => {
    return (
        <>
            <Faq
                data={data}
                styles={styles}
                config={config}
            />
        </>
    )
}

export default Faqs;
