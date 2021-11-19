import React from 'react';

export default function ({ numero1, numero2 }) {
    return (
        <div>
            La sumatoria de {numero1} y {numero2} es {Number(numero1) + Number(numero2)}
        </div>
    );
}
