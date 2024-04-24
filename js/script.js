class GetValores {
    constructor() {
        this.formulario = document.getElementById('ordemServico');
        this.resultados = document.getElementById('resultados');
        this.botaoCopiar = document.getElementById("btn-copiar");
        this.minhaLista = document.getElementById("resultados");
        this.mensagem = document.getElementById('mensagem');
        this.mensagem2 = document.getElementById('mensagem2');

        this.setupCheckboxEventListeners('anexo', this.mensagem, 'Então anexe o print!');
        this.setupCheckboxEventListeners('controladora', this.mensagem2, 'Então ajuste a controladora!');

        this.formulario.addEventListener('submit', this.enviarTextos.bind(this));
        this.botaoCopiar.addEventListener("click", () => this.copiarParaAreaDeTransferencia());
    }

    setupCheckboxEventListeners(name, mensagemElement, mensagemText) {
        const checkboxes = document.querySelectorAll(`input[name="${name}"]`);
        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', () => {
                checkboxes.forEach(otherCheckbox => {
                    if (otherCheckbox !== checkbox) {
                        otherCheckbox.checked = false;
                    }
                });

                mensagemElement.textContent = (checkbox.value === 'nao' && checkbox.checked) ? mensagemText : '';
                mensagemElement.style.display = (mensagemElement.textContent !== '') ? 'block' : 'none';
            });
        });
    }

    enviarTextos(event) {
        event.preventDefault();
        const formData = this.getFormData();

        this.resultados.innerHTML = '';
        this.clearFormFields();

        this.renderFormData(formData);
    }

    getFormData() {
        const formData = {};
        const formElements = this.formulario.elements;
        for (const element of formElements) {
            if (element.id) {
                formData[element.id] = element.value.replace(/\n/g, '<br>');
            }
        }
        return formData;
    }

    clearFormFields() {
        const formElements = this.formulario.elements;
        for (const element of formElements) {
            if (element.id) {
                element.value = '';
            }
        }
    }

    renderFormData(formData) {
        for (const [key, value] of Object.entries(formData)) {
            if (key !== 'btn-enviar' && key !== 'btn-copiar') {
                const resultadoItem = document.createElement('li');
                resultadoItem.textContent = `${key}: ${value}`;
                this.resultados.appendChild(resultadoItem);
            }
        }
    }
    

    copiarParaAreaDeTransferencia() {
        const listaTexto = Array.from(this.minhaLista.querySelectorAll("li")).map(item => item.textContent).join("\n");
        const textarea = document.createElement("textarea");
        textarea.value = listaTexto;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
        alert("Lista copiada para a área de transferência!");
    }
}

window.addEventListener('load', () => {
    const minhaInstancia = new GetValores();
});
