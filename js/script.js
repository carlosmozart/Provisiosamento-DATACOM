
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


        if (base == 'WLAN' && olt == 'DATACOM' && lineProfile == 'ROUTER') {
            const resultadoLinhaB2 = document.createElement('li');
            resultadoLinhaB2.textContent = `config`;
            this.resultados.appendChild(resultadoLinhaB2);

            const resultadoRamo = document.createElement('li');
            resultadoRamo.textContent = `interface gpon ${ramo}`;
            this.resultados.appendChild(resultadoRamo);

            const resultadonOnu = document.createElement('li');
            resultadonOnu.textContent = `onu ${nOnu}`;
            this.resultados.appendChild(resultadonOnu);

            const resultadoNome = document.createElement('li');
            resultadoNome.textContent = `name ${nome}`;
            this.resultados.appendChild(resultadoNome);

            const resultadoSerial = document.createElement('li');
            resultadoSerial.textContent = `serial-number ${serial}`;
            this.resultados.appendChild(resultadoSerial);

            const resultadoLinhaB7 = document.createElement('li');
            resultadoLinhaB7.textContent = `line-profile TEMP`;
            this.resultados.appendChild(resultadoLinhaB7);

            const resultadoLinha2 = document.createElement('li');
            resultadoLinha2.textContent = `snmp profile snmpOnu`;
            this.resultados.appendChild(resultadoLinha2);

            const resultadoLinhaB6 = document.createElement('li');
            resultadoLinhaB6.textContent = `ipv4 vlan vlan-id 99`;
            this.resultados.appendChild(resultadoLinhaB6);

            const resultadoLinhaB3 = document.createElement('li');
            resultadoLinhaB3.textContent = `ipv4 dhcp`;
            this.resultados.appendChild(resultadoLinhaB3);

            const resultadoLinha3 = document.createElement('li');
            resultadoLinha3.textContent = `veip 1`;
            this.resultados.appendChild(resultadoLinha3);

            const resultadoLinhaB4 = document.createElement('li');
            resultadoLinhaB4.textContent = `top`;
            this.resultados.appendChild(resultadoLinhaB4);

            const resultadoServicePort1 = document.createElement('li');
            resultadoServicePort1.textContent = `service-port ${servicePort1} gpon ${ramo} onu ${nOnu} gem 1 match vlan vlan-id 99 action vlan replace vlan-id 99`;
            this.resultados.appendChild(resultadoServicePort1);

            const resultadoServicePort2 = document.createElement('li');
            resultadoServicePort2.textContent = `service-port ${servicePort2} gpon ${ramo} onu ${nOnu} gem 2 match vlan vlan-id ${vlan} action vlan replace vlan-id ${vlan}`;
            this.resultados.appendChild(resultadoServicePort2);

            const resultadoLinha4 = document.createElement('li');
            resultadoLinha4.textContent = `commit`;
            this.resultados.appendChild(resultadoLinha4);

            const resultadoLinhaB5 = document.createElement('li');
            resultadoLinhaB5.textContent = `end`;
            this.resultados.appendChild(resultadoLinhaB5);

            const resultadoLinha5 = document.createElement('li');
            resultadoLinha5.textContent = `exit`;
            this.resultados.appendChild(resultadoLinha5);

        }

        if (base == 'WLAN' && olt == 'DATACOM' && lineProfile == 'BRIDGE') {

            const resultadoLinhaB2 = document.createElement('li');
            resultadoLinhaB2.textContent = `config`;
            this.resultados.appendChild(resultadoLinhaB2);

            const resultadoRamo = document.createElement('li');
            resultadoRamo.textContent = `interface gpon ${ramo}`;
            this.resultados.appendChild(resultadoRamo);

            const resultadonOnu = document.createElement('li');
            resultadonOnu.textContent = `onu ${nOnu}`;
            this.resultados.appendChild(resultadonOnu);

            const resultadoNome = document.createElement('li');
            resultadoNome.textContent = `name ${nome}`;
            this.resultados.appendChild(resultadoNome);

            const resultadoSerial = document.createElement('li');
            resultadoSerial.textContent = `serial-number ${serial}`;
            this.resultados.appendChild(resultadoSerial);

            const resultadoLinhaB7 = document.createElement('li');
            resultadoLinhaB7.textContent = `service-profile spBRIDGE line-profile onuBridge`;
            this.resultados.appendChild(resultadoLinhaB7);

            const resultadoLinha2 = document.createElement('li');
            resultadoLinha2.textContent = `snmp profile snmpOnu`;
            this.resultados.appendChild(resultadoLinha2);

            const resultadoLinhaB6 = document.createElement('li');
            resultadoLinhaB6.textContent = `ethernet 1`;
            this.resultados.appendChild(resultadoLinhaB6);

            const resultadoLinhaB3 = document.createElement('li');
            resultadoLinhaB3.textContent = `negotiation`;
            this.resultados.appendChild(resultadoLinhaB3);

            const resultadoLinha3 = document.createElement('li');
            resultadoLinha3.textContent = `no shutdown`;
            this.resultados.appendChild(resultadoLinha3);

            const resultadoLinhaB4 = document.createElement('li');
            resultadoLinhaB4.textContent = `!`;
            this.resultados.appendChild(resultadoLinhaB4);

            const resultadoLinhaB8 = document.createElement('li');
            resultadoLinhaB8.textContent = `!`;
            this.resultados.appendChild(resultadoLinhaB8);

            const resultadoLinhaB9 = document.createElement('li');
            resultadoLinhaB9.textContent = `!`;
            this.resultados.appendChild(resultadoLinhaB9);

            const resultadoServicePort1 = document.createElement('li');
            resultadoServicePort1.textContent = `service-port ${servicePort1} gpon ${ramo} onu ${nOnu} gem 1 match vlan vlan-id any action vlan add vlan-id ${vlan}`;
            this.resultados.appendChild(resultadoServicePort1);

            const resultadoLinha4 = document.createElement('li');
            resultadoLinha4.textContent = `commit`;
            this.resultados.appendChild(resultadoLinha4);

            const resultadoLinhaB5 = document.createElement('li');
            resultadoLinhaB5.textContent = `end`;
            this.resultados.appendChild(resultadoLinhaB5);

            const resultadoLinha5 = document.createElement('li');
            resultadoLinha5.textContent = `exit`;
            this.resultados.appendChild(resultadoLinha5);

        }

        if (base == 'AMPLITUDE' && olt == 'DATACOM' && lineProfile == 'ROUTER') {
            const resultadoLinhaB2 = document.createElement('li');
            resultadoLinhaB2.textContent = `config`;
            this.resultados.appendChild(resultadoLinhaB2);

            const resultadoRamo = document.createElement('li');
            resultadoRamo.textContent = `interface gpon ${ramo}`;
            this.resultados.appendChild(resultadoRamo);

            const resultadonOnu = document.createElement('li');
            resultadonOnu.textContent = `onu ${nOnu}`;
            this.resultados.appendChild(resultadonOnu);

            const resultadoNome = document.createElement('li');
            resultadoNome.textContent = `name ${nome}`;
            this.resultados.appendChild(resultadoNome);

            const resultadoSerial = document.createElement('li');
            resultadoSerial.textContent = `serial-number ${serial}`;
            this.resultados.appendChild(resultadoSerial);

            const resultadoLinhaB7 = document.createElement('li');
            resultadoLinhaB7.textContent = `service-profile spROUTER-DM985-100 line-profile lpROUTER-DM985-100`;
            this.resultados.appendChild(resultadoLinhaB7);

            const resultadoLinha2 = document.createElement('li');
            resultadoLinha2.textContent = `snmp profile SNMP-ONU`;
            this.resultados.appendChild(resultadoLinha2);

            const resultadoLinhaB6 = document.createElement('li');
            resultadoLinhaB6.textContent = `veip 1`;
            this.resultados.appendChild(resultadoLinhaB6);

            const resultadoLinhaB3 = document.createElement('li');
            resultadoLinhaB3.textContent = `!`;
            this.resultados.appendChild(resultadoLinhaB3);

            const resultadoServicePort1 = document.createElement('li');
            resultadoServicePort1.textContent = `service-port ${servicePort1} gpon ${ramo} onu ${nOnu} gem 1 match vlan vlan-id ${vlan} action vlan replace vlan-id ${vlan}`;
            this.resultados.appendChild(resultadoServicePort1);

            const resultadoLinha4 = document.createElement('li');
            resultadoLinha4.textContent = `commit`;
            this.resultados.appendChild(resultadoLinha4);

            const resultadoLinhaB5 = document.createElement('li');
            resultadoLinhaB5.textContent = `end`;
            this.resultados.appendChild(resultadoLinhaB5);

            const resultadoLinha5 = document.createElement('li');
            resultadoLinha5.textContent = `exit`;
            this.resultados.appendChild(resultadoLinha5);

        }

        if (base == 'AMPLITUDE' && olt == 'DATACOM' && lineProfile == 'BRIDGE') {

            const resultadoLinhaB2 = document.createElement('li');
            resultadoLinhaB2.textContent = `config`;
            this.resultados.appendChild(resultadoLinhaB2);

            const resultadoRamo = document.createElement('li');
            resultadoRamo.textContent = `interface gpon ${ramo}`;
            this.resultados.appendChild(resultadoRamo);

            const resultadonOnu = document.createElement('li');
            resultadonOnu.textContent = `onu ${nOnu}`;
            this.resultados.appendChild(resultadonOnu);

            const resultadoNome = document.createElement('li');
            resultadoNome.textContent = `name ${nome}`;
            this.resultados.appendChild(resultadoNome);

            const resultadoSerial = document.createElement('li');
            resultadoSerial.textContent = `serial-number ${serial}`;
            this.resultados.appendChild(resultadoSerial);

            const resultadoLinhaB7 = document.createElement('li');
            resultadoLinhaB7.textContent = `service-profile spBRIDGE line-profile ONU_BRIDGE`;
            this.resultados.appendChild(resultadoLinhaB7);

            const resultadoLinha2 = document.createElement('li');
            resultadoLinha2.textContent = `snmp profile SNMP-ONU`;
            this.resultados.appendChild(resultadoLinha2);

            const resultadoLinhaB6 = document.createElement('li');
            resultadoLinhaB6.textContent = `ethernet 1`;
            this.resultados.appendChild(resultadoLinhaB6);

            const resultadoLinhaB3 = document.createElement('li');
            resultadoLinhaB3.textContent = `negotiation`;
            this.resultados.appendChild(resultadoLinhaB3);

            const resultadoLinha3 = document.createElement('li');
            resultadoLinha3.textContent = `no shutdown`;
            this.resultados.appendChild(resultadoLinha3);

            const resultadoLinhaB4 = document.createElement('li');
            resultadoLinhaB4.textContent = `!`;
            this.resultados.appendChild(resultadoLinhaB4);

            const resultadoLinhaB8 = document.createElement('li');
            resultadoLinhaB8.textContent = `!`;
            this.resultados.appendChild(resultadoLinhaB8);

            const resultadoLinhaB9 = document.createElement('li');
            resultadoLinhaB9.textContent = `!`;
            this.resultados.appendChild(resultadoLinhaB9);

            const resultadoServicePort1 = document.createElement('li');
            resultadoServicePort1.textContent = `service-port ${servicePort1} gpon ${ramo} onu ${nOnu} gem 1 match vlan vlan-id any action vlan add vlan-id ${vlan}`;
            this.resultados.appendChild(resultadoServicePort1);

            const resultadoLinha4 = document.createElement('li');
            resultadoLinha4.textContent = `commit`;
            this.resultados.appendChild(resultadoLinha4);

            const resultadoLinhaB5 = document.createElement('li');
            resultadoLinhaB5.textContent = `end`;
            this.resultados.appendChild(resultadoLinhaB5);

            const resultadoLinha5 = document.createElement('li');
            resultadoLinha5.textContent = `exit`;
            this.resultados.appendChild(resultadoLinha5);

        }

        if (base == 'AMPLITUDE' && olt == 'HUAWEI' && lineProfile == 'ROUTER') {
            const resultadoLinhaB2 = document.createElement('li');
            resultadoLinhaB2.textContent = `config`;
            this.resultados.appendChild(resultadoLinhaB2);

            const resultadoRamo = document.createElement('li');
            resultadoRamo.textContent = `interface gpon ${ramo}`;
            this.resultados.appendChild(resultadoRamo);

            const resultadonOnu = document.createElement('li');
            resultadonOnu.textContent = `onu ${nOnu}`;
            this.resultados.appendChild(resultadonOnu);

            const resultadoNome = document.createElement('li');
            resultadoNome.textContent = `name ${nome}`;
            this.resultados.appendChild(resultadoNome);

            const resultadoSerial = document.createElement('li');
            resultadoSerial.textContent = `serial-number ${serial}`;
            this.resultados.appendChild(resultadoSerial);

            const resultadoLinhaB7 = document.createElement('li');
            resultadoLinhaB7.textContent = `line-profile HUAWEI service-profile ONU-HUAWEI`;
            this.resultados.appendChild(resultadoLinhaB7);

            const resultadoLinha2 = document.createElement('li');
            resultadoLinha2.textContent = `snmp profile SNMP-ONU`;
            this.resultados.appendChild(resultadoLinha2);

            const resultadoServicePort1 = document.createElement('li');
            resultadoServicePort1.textContent = `service-port ${servicePort1} gpon ${ramo} onu ${nOnu} gem 1 match vlan vlan-id ${vlan} action vlan replace vlan-id ${vlan}`;
            this.resultados.appendChild(resultadoServicePort1);

            const resultadoLinha4 = document.createElement('li');
            resultadoLinha4.textContent = `commit`;
            this.resultados.appendChild(resultadoLinha4);

            const resultadoLinhaB5 = document.createElement('li');
            resultadoLinhaB5.textContent = `end`;
            this.resultados.appendChild(resultadoLinhaB5);

            const resultadoLinha5 = document.createElement('li');
            resultadoLinha5.textContent = `exit`;
            this.resultados.appendChild(resultadoLinha5);

        }


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

