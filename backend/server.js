import cluster from "node:cluster";
import os from "os";

const cpus = os.cpus().length;

if(cluster.isPrimary){
    for(let i=0;i<cpus;i++){
        cluster.fork();
    }
}