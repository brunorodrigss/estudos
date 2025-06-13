const express = require("express");
const ping = require("ping");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(cors());

// 🔥 Serve arquivos estáticos (script.js, css etc)
app.use(express.static(__dirname));

// 👉 Rota principal: entrega o index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Hosts para monitorar
const hosts = [
  { name: "DALLAS-WINDOWS", ip: "192.168.2.5" },
  { name: "VEGAS-WINDOWS", ip: "192.168.52.20" },
  { name: "PARIS-WINDOWS", ip: "192.168.52.70" },
  { name: "CODO-WINDOWS", ip: "192.168.2.20" },
  { name: "PARACATU-WINDOWS", ip: "192.168.2.10" },
  { name: "TOKIO-WINDOWS", ip: "192.168.2.40" },
  { name: "GAMA-WINDOWS", ip: "192.168.4.10" },
  { name: "SAMAMBAIA-WINDOWS", ip: "192.168.4.20" },
  { name: "MACEIO-LINUX", ip: "192.168.3.20" },
  { name: "COLOMBO-LINUX", ip: "192.168.3.70" },
  { name: "VICTORIA-LINUX", ip: "192.168.3.25" },
  { name: "SOMBRIO-LINUX", ip: "192.168.2.200" },
  // { name: "ATENAS-LINUX", ip: "192.168.52.250" }, // comentado
  { name: "Proxmox (DCC)-LINUX", ip: "192.168.1.10" },
  { name: "CLUSTERS-LINUX", ip: "192.168.1.11" },
  { name: "CLUSTERS-LINUX", ip: "192.168.1.12" },
  { name: "CLUSTERS-LINUX", ip: "192.168.1.13" },
  { name: "CLUSTERS-LINUX", ip: "192.168.1.14" },
  { name: "Proxmox (DAT - BASE)-LINUX", ip: "192.168.52.10" },
  { name: "CLUSTERS-LINUX", ip: "192.168.52.11" },
  { name: "CLUSTERS-LINUX", ip: "192.168.52.12" },
  { name: "CEILANDIA-LINUX", ip: "192.168.2.100" },
  { name: "LISBOA-LINUX", ip: "192.168.52.111" },
  { name: "KIEV-LINUX", ip: "192.168.52.150" },
  { name: "SAQUAREMA-LINUX", ip: "192.168.3.112" },
  { name: "DCC SWITCH - A6850-PILHA", ip: "192.168.1.100" },
  { name: "DCC SWITCH - A6850-211013-TI-TERREO", ip: "192.168.1.101" },
  { name: "DCC SWITCH - A6850-211015-TI-RACKSVR", ip: "192.168.1.102" },
  { name: "DCC SWITCH - A6250-172905-RACK02", ip: "192.168.1.103" },
  { name: "DCC SWITCH - A6250-172870-3andar_01", ip: "192.168.1.110" },
  { name: "DCC SWITCH - A6250-173023-3andar_02", ip: "192.168.1.111" },
  { name: "DCC SWITCH - A6250-173023-2andar_01", ip: "192.168.1.112" },
  { name: "DCC SWITCH - A6250-2andar_02", ip: "192.168.1.113" },
  { name: "DCC SWITCH - A6250-172931-1andar_01", ip: "192.168.1.114" },
  { name: "DCC SWITCH - A6250-172906-1andar_02", ip: "192.168.1.115" },
  { name: "DCC SWITCH - A6250-SS-Terreo", ip: "192.168.1.116" },
  { name: "DCC SWITCH - A6250-172607-Terreo", ip: "192.168.1.117" },
  { name: "DCC SWITCH - A6850 - radio licenciado", ip: "10.233.1.3" },
  { name: "DCC SWITCH - Pilha A - 7 switches Huawei", ip: "192.168.1.110" },
  { name: "DCC SWITCH - Pilha B - 7 switches Huawei", ip: "192.168.1.120" },
  { name: "DAT - BASE CISCO", ip: "10.232.252.3" },
  { name: "DAT - BASE ALCATEL", ip: "192.168.51.100" },
  { name: "DAT - BASE CISCO", ip: "192.168.51.110" },
  { name: "DAT - BASE CISCO", ip: "192.168.51.111" },
  { name: "DAT - BASE CISCO", ip: "192.168.51.112" },
  // { name: "DAT - BASE HUAWEI", ip: "192.168.51.120" }, // comentado
  { name: "FW DCC", ip: "192.168.1.1" },
  { name: "FW DAT - BASE", ip: "192.168.51.1" }
];

let resultados = [];

async function pingarHosts() {
  const promises = hosts.map(async (host) => {
    const res = await ping.promise.probe(host.ip, { timeout: 3 });
    return {
      name: host.name,
      ip: host.ip,
      status: res.alive ? "Online" : "Offline",
      time: res.time + " ms",
      date: new Date().toLocaleString("pt-BR"),
    };
  });

  resultados = await Promise.all(promises);
  console.log("Ping atualizado em", new Date().toLocaleString());
}

pingarHosts();
setInterval(pingarHosts, 5 * 60 * 1000);

app.get("/status", (req, res) => {
  res.json(resultados);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
