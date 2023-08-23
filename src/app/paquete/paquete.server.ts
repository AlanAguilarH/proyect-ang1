import { Injectable } from "@angular/core";

@Injectable()
export class PaqueteServicie {

    public paquetes:Paquete[] = [
        {
            img_paquete:"assets/imagen/iron_server.png",
            Nombre_paquete:"Servidor de Hierro (Fe)",
            Descp_paquete:"Este servicio de paquete es basica, solo es recomendado para novatos y recien ingresados desde aqui como comienza su uso del internet",
            img_Vel:"assets/imagen/Velocidad_de_bits.png",
            vel_paquete:"Su velocidad es de 512 kbps hasta 20 Mbps en linea por tranferencia",
            img_Download:"assets/imagen/descarga.png",
            download_paquete:"Su velocidad para download es de 1 Mbps hasta 20 Mbps por archivo",
            img_Upload:"assets/imagen/upload.png",
            upload_paquete:"Su velocidad para upload es de 512 kbps hasta 10 Mbps por archivo",
            adv_paq:"Este servicio de paquete no es recomendado para la conexion de 100Mbps, seria un desperdicio de datos de uploader como download como el transito por almacenamiento de datos (en la nube), solo aplica la conexion basica como 512 kbps hasta 20 Mbps"
        },
        {   
            img_paquete:"assets/imagen/steel_server.png",
            Nombre_paquete:"Servidor de Acero (FeC)",
            Descp_paquete:"Este servicio de paquete es super basica, solo es recomendado para semiexpertos o experimentados como su uso del internet",
            img_Vel:"assets/imagen/Velocidad_de_bits.png",
            vel_paquete:"Su velocidad es de 2 Mbps hasta 40 Mbps en linea por tranferencia",
            img_Download:"assets/imagen/descarga.png",
            download_paquete:"Su velocidad para download es de 5 Mbps hasta 40 Mbps por archivo",
            img_Upload:"assets/imagen/upload.png",
            upload_paquete:"Su velocidad para upload es de 2 Mbps hasta 30 Mbps por archivo",
            adv_paq:"Este servicio de paquete no es recomendado para la conexion de 100Mbps maximo y minimo 512 kbps, seria un desperdicio de datos de uploader como download como el transito por almacenamiento de datos (en la nube), solo aplica la conexion basica plus como 2 Mbps hasta 40 Mbps"
        },
        {
            img_paquete:"assets/imagen/copper_server.png",
            Nombre_paquete:"Servidor de Cobre (Cu)",
            Descp_paquete:"Este servicio de paquete es intermedio, solo es recomendado para expertos o semiprofesionales como su uso del internet como documentacion de datos",
            img_Vel:"assets/imagen/Velocidad_de_bits.png",
            vel_paquete:"Su velocidad es de 10 Mbps hasta 60 Mbps en linea por tranferencia",
            img_Download:"assets/imagen/descarga.png",
            download_paquete:"Su velocidad para download es de 24 Mbps hasta 60 Mbps por archivo",
            img_Upload:"assets/imagen/upload.png",
            upload_paquete:"Su velocidad para upload es de 10 Mbps hasta 40 Mbps por archivo",
            adv_paq:"Este servicio de paquete no es recomendado para la conexion de 200Mbps maximo y minimo 2 Mbps, seria un desperdicio de datos de uploader como download como el transito por almacenamiento de datos (en la nube), solo aplica la conexion semiempresaria como 10 Mbps hasta 60 Mbps"
        },
        {
            img_paquete:"assets/imagen/silver_server.png",
            Nombre_paquete:"Servidor de Plata (Ag)",
            Descp_paquete:"Este servicio de paquete es Uber-Intermedio, solo es recomendado para semiprofesionales o preexperimentados maestros como su uso del internet como documentacion de datos",
            img_Vel:"assets/imagen/Velocidad_de_bits.png",
            vel_paquete:"Su velocidad es de 24 Mbps hasta 128 Mbps en linea por tranferencia",
            img_Download:"assets/imagen/descarga.png",
            download_paquete:"Su velocidad para download es de 24 Mbps hasta 64 Mbps por archivo",
            img_Upload:"assets/imagen/upload.png",
            upload_paquete:"Su velocidad para upload es de 48 Mbps hasta 128 Mbps por archivo",
            adv_paq:"Este servicio de paquete no es recomendado para la conexion de 200Mbps maximo y minimo 8 Mbps, seria un desperdicio de datos de uploader como download como el transito por almacenamiento de datos (en la nube), solo aplica la conexion empresario como 24 Mbps hasta 128 Mbps"
        },
        {
            img_paquete:"assets/imagen/gold_server.png",
            Nombre_paquete:"Servidor de Oro (Au)",
            Descp_paquete:"Este servivio de paquete es Premium, solo es recomendado para profesinonales o experimentados maestros como su uso del internet, documentacion de datos como codificacion de servidores por configuracion",
            img_Vel:"assets/imagen/Velocidad_de_bits.png",
            vel_paquete:"Su velocidad es de 48 Mbps hasta 256 Mbps en linea por tranferencia",
            img_Download:"assets/imagen/descarga.png",
            download_paquete:"Su velocidad para download es de 96 Mbps hasta 256 Mbps por archivo",
            img_Upload:"assets/imagen/upload.png",
            upload_paquete:"Su velocidad para upload es de 48 Mbps hasta 128 Mbps por archivo",
            adv_paq:"Este servicio de paquete no es recomendado para la conexion de 500Mbps maximo y minimo 20 Mbps, seria un desperdicio de datos de uploader como download como el transito por almacenamiento de datos (en la nube), solo aplica la conexion total como 48 Mbps hasta 256 Mbps"
        },
        {
            img_paquete:"assets/imagen/platinum_server.png",
            Nombre_paquete:"Servidor de Platino (Pt)",
            Descp_paquete:"Este servivio de paquete es Premium Total Maximum (PTM), solo es recomendado para maestros de sistemas computacionales o proadministradores como su uso del internet, documentacion de datos como codificacion de servidores por configuracion",
            img_Vel:"assets/imagen/Velocidad_de_bits.png",
            vel_paquete:"Su velocidad es de 128 Mbps hasta 512 Mbps en linea por tranferencia",
            img_Download:"assets/imagen/descarga.png",
            download_paquete:"Su velocidad para download es de 200 Mbps hasta 512 Mbps por archivo",
            img_Upload:"assets/imagen/upload.png",
            upload_paquete:"Su velocidad para upload es de 128 Mbps hasta 320 Mbps por archivo",
            adv_paq:"Este servicio de paquete no es recomendado para la conexion de 1 Gbps maximo y minimo 50 Mbps, seria un desperdicio de datos de uploader como download como el transito por almacenamiento de datos (en la nube), solo aplica la conexion total premium como 512 kbps hasta 20 Mbps"
        }
    ];

    constructor() {
        console.log("se aplica los servicios premium de usuario");
    }

    getPaquete():Paquete[] {
        return this.paquetes;
    }

    getDetalle(idx:number) {
        return this.paquetes[idx];
    }

}

export interface Paquete{
    img_paquete:string;
    Nombre_paquete:string;
    Descp_paquete:string;
    img_Vel:string;
    vel_paquete:string;
    img_Download:string;
    download_paquete:string;
    img_Upload:string;
    upload_paquete:string;
    adv_paq: string;
};
