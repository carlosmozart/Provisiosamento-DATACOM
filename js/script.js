class GetValores {
    constructor() {
        this.formulario = document.getElementById('ordemServico');
        this.resultados = document.getElementById('resultados');
        this.formulario.addEventListener('submit', this.enviarTextos.bind(this));
        this.botaoCopiar = document.getElementById("btn-copiar");
        this.minhaLista = document.getElementById("resultados");
        this.botaoCopiar.addEventListener("click", () => this.copiarParaAreaDeTransferencia());
    }

    enviarTextos(event) {
        event.preventDefault();

        const base = document.getElementById('base').value;
        const olt = document.getElementById('olt').value;
        const lineProfile = document.getElementById('lineProfile').value;
        const nOnu = document.getElementById('nOnu').value;
        const nome = document.getElementById('nome').value;
        const serial = document.getElementById('serial').value;
        const servicePort1 = document.getElementById('servicePort1').value;
        const servicePort2 = document.getElementById('servicePort2').value;
        const ramo = document.getElementById('ramo').value;
        const vlan = document.getElementById('vlan').value;

        this.resultados.innerHTML = '';

        document.getElementById('nOnu').value = '';
        document.getElementById('nome').value = '';
        document.getElementById('ramo').value = '';
        document.getElementById('serial').value = '';
        document.getElementById('servicePort1').value = '';
        document.getElementById('servicePort2').value = '';
        document.getElementById('vlan').value = '';

        const commonLines = [
            `config`,
            `interface gpon ${ramo}`,
            `onu ${nOnu}`,
            `name ${nome}`,
            `serial-number ${serial}`
        ];

        if (base === 'WLAN' && olt === 'DATACOM') {
            if (lineProfile === 'ROUTER') {
                const lines = [
                    ...commonLines,
                    `line-profile ONT-MGMT`,
                    `  tr069-acs-profile GenieACS`,
                    `snmp profile SNMP-ONU`,
                    `ipv4 vlan vlan-id 110`,
                    `ipv4 dhcp`,
                    `veip 1`,
                    `!`,
                    `!`,
                    `!`,
                    `top`,
                    `service-port ${servicePort1} gpon ${ramo} onu ${nOnu} gem 1 match vlan vlan-id 110 action vlan replace vlan-id 110`,
                    `service-port ${servicePort2} gpon ${ramo} onu ${nOnu} gem 2 match vlan vlan-id ${vlan} action vlan replace vlan-id ${vlan}`,
                    `commit`,
                    `end`,
                    `exit`
                ];
                this.addLinesToResults(lines);
            } else if (lineProfile === 'BRIDGE') {
                const lines = [
                    ...commonLines,
                    `service-profile spBRIDGE line-profile ONU_BRIDGE`,
                    `snmp profile SNMP-ONU`,
                    `tr069-acs-profile GenieACS`,
                    `ethernet 1`,
                    `negotiation`,
                    `no shutdown`,
                    `!`,
                    `!`,
                    `!`,
                    `service-port ${servicePort1} gpon ${ramo} onu ${nOnu} gem 1 match vlan vlan-id any action vlan add vlan-id ${vlan}`,
                    `commit`,
                    `end`,
                    `exit`
                ];
                this.addLinesToResults(lines);
            }

        }
    }

    addLinesToResults(lines) {
        lines.forEach(line => {
            const listItem = document.createElement('li');
            listItem.textContent = line;
            this.resultados.appendChild(listItem);
        });
    }

    copiarParaAreaDeTransferencia() {
        const listaTexto = Array.from(this.minhaLista.querySelectorAll("li"))
            .map(item => item.textContent)
            .join("\n");

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

// Alterna o modo escuro
document.getElementById('toggleDarkMode').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    document.querySelectorAll('.container, .label, .box, .descricao, .geo, .button')
        .forEach(element => element.classList.toggle('dark-mode'));
    
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
});
