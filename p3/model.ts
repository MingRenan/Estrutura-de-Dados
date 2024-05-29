class Pessoa {
    nome: string;
    idade: number;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }
}

class Sort {
    quickSort(arr: Pessoa[]): Pessoa[] {
        if (arr.length <= 1) return arr;
        
        const pivot = arr[Math.floor(arr.length / 2)];
        const less = arr.filter(person => {
            if (person.nome === pivot.nome) {
                return person.idade < pivot.idade;
            }
            return person.nome < pivot.nome;
        });
        const equal = arr.filter(person => person.nome === pivot.nome && person.idade === pivot.idade);
        const greater = arr.filter(person => {
            if (person.nome === pivot.nome) {
                return person.idade > pivot.idade;
            }
            return person.nome > pivot.nome;
        });

        return [...this.quickSort(less), ...equal, ...this.quickSort(greater)];
    }
}

export { Pessoa, Sort };
