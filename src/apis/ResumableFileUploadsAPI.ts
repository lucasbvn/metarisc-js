import { Core, MetariscConfig } from "../core";
import Utils from "../utils";
import type { AxiosResponse } from 'axios';

/**
 * no description
 */
export class ResumableFileUploadsAPI extends Core {
    constructor(config : MetariscConfig) {
        super(config);
    }

    /**
     * Une requête POST vide est utilisée pour créer une nouvelle ressource de téléchargement. L\'en-tête Upload-Length indique la taille de l\'ensemble du téléchargement en octets. Si l\'extension Création avec téléchargement est disponible, le client peut inclure des parties du téléchargement dans la demande de création initiale
     * Création d\'une nouvelle ressource de téléchargement
     * @param contentLength Doit être 0 pour l\&#39;extension de création. Peut être un nombre positif pour l\&#39;extension Creation With Upload.
     * @param uploadLength L\&#39;en-tête de demande et de réponse Upload-Length indiquant la taille de l\&#39;ensemble du téléchargement en octets. La valeur DOIT être un entier non négatif. Dans l\&#39;extension de concaténation, le client NE DOIT PAS inclure l\&#39;en-tête Upload-Length dans la création finale du téléchargement.
     * @param tusResumable Version du protocole
     * @param uploadMetadata Ajouté par l\&#39;extension Creation. L\&#39;en-tête de demande et de réponse Upload-Metadata DOIT consister en une ou plusieurs paires clé-valeur séparées par des virgules. La clé et la valeur DOIVENT être séparées par un espace. La clé NE DOIT PAS contenir d\&#39;espaces ni de virgules et NE DOIT PAS être vide. La clé DEVRAIT être encodée en ASCII et la valeur DOIT être encodée en Base64. Toutes les clés DOIVENT être uniques. La valeur PEUT être vide. Dans ces cas, l\&#39;espace, qui séparerait normalement la clé et la valeur, PEUT être omis. Étant donné que les métadonnées peuvent contenir des valeurs binaires arbitraires, les serveurs DEVRAIENT soigneusement valider les valeurs des métadonnées ou les nettoyer avant de les utiliser comme valeurs d\&#39;en-tête pour éviter la contrebande d\&#39;en-tête.
     * @param uploadConcat Ajouté par l\&#39;extension Concaténation. L\&#39;en-tête de demande et de réponse Upload-Concat DOIT être défini dans les demandes de création de téléchargement partiel et final. Il indique si le téléchargement est un téléchargement partiel ou final. Si le téléchargement est partiel, la valeur d\&#39;en-tête DOIT être partielle. Dans le cas d\&#39;un téléchargement final, sa valeur DOIT être finale suivie d\&#39;un point-virgule et d\&#39;une liste séparée par des espaces d\&#39;URL de téléchargement partiel qui seront concaténées. Les URL de téléchargements partiels PEUVENT être absolues ou relatives et NE DOIVENT PAS contenir d\&#39;espaces comme défini dans la RFC 3986.
     * @param uploadDeferLength L\&#39;en-tête de demande et de réponse Upload-Defer-Length indique que la taille du téléchargement n\&#39;est pas connue actuellement et sera transférée ultérieurement. Sa valeur DOIT être 1. Si la longueur d\&#39;un téléchargement n\&#39;est pas différée, cet en-tête DOIT être omis.
     * @param uploadOffset L\&#39;en-tête de demande et de réponse Upload-Offset indique un décalage d\&#39;octet dans une ressource. La valeur DOIT être un entier non négatif.
     * @param uploadChecksum L\&#39;en-tête de demande Upload-Checksum contient des informations sur la somme de contrôle de la charge utile du corps actuel. L\&#39;en-tête DOIT être composé du nom de l\&#39;algorithme de somme de contrôle utilisé et de la somme de contrôle encodée en Base64 séparés par un espace.
     * @param body Contenu restant du fichier. Requis si Content-Length &gt; 0.
     */
    async createNewUploadResource(contentLength?: number, uploadLength?: number, tusResumable?: any, uploadMetadata?: string, uploadConcat?: string, uploadDeferLength?: any, uploadOffset?: number, uploadChecksum?: string, body?: string): Promise<AxiosResponse<void>>
    {
        const pathVariable = {  };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/resumable-file-uploads/files'),
            headers: { 'Content-Length': contentLength, 'Upload-Length': uploadLength, 'Tus-Resumable': tusResumable, 'Upload-Metadata': uploadMetadata, 'Upload-Concat': uploadConcat, 'Upload-Defer-Length': uploadDeferLength, 'Upload-Offset': uploadOffset, 'Upload-Checksum': uploadChecksum },
            params: {  },
            body: body
        });
    }

    /**
     * Lors de la réception d\'une demande DELETE pour un téléchargement existant, l\'API tus-resumable-uploads libére les ressources associées et répond avec le status code 204 No Content confirmant que le téléchargement a été terminé. Pour toutes les demandes futures à cette URL, l\'API tus-resumable-uploads répond avec le status code 404 Not Found ou 410 Gone.
     * Annulation d\'un téléchargement
     * @param tusResumable Version du protocole
     * @param id identifiant du fichier
     */
    async deleteFile(tusResumable: any, id: string): Promise<AxiosResponse<void>>
    {
        const pathVariable = { 'id': id };
        return this.request({
            method: 'DELETE',
            endpoint: Utils.constructPath(pathVariable, '/resumable-file-uploads/files/{id}'),
            headers: { 'Tus-Resumable': tusResumable },
            params: {  },
            body: {}
        });
    }

    /**
     * Une demande OPTIONS PEUT être utilisée pour recueillir des informations sur la configuration actuelle du serveur. Une réponse réussie indiquée par le status code 204 Pas de contenu ou 200 OK DOIT contenir l\'en-tête Tus-Version. Il PEUT inclure les en-têtes Tus-Extension et Tus-Max-Size.
     * Informations sur la configuration actuelle du serveur
     */
    async getServerInfo(): Promise<AxiosResponse<void>>
    {
        const pathVariable = {  };
        return this.request({
            method: 'OPTIONS',
            endpoint: Utils.constructPath(pathVariable, '/resumable-file-uploads/files'),
            headers: {  },
            params: {  },
            body: {}
        });
    }

    /**
     * Utilisé pour déterminer le décalage auquel le téléchargement doit être poursuivi.
     * Déterminer le décalage auquel le téléchargement doit être poursuivi
     * @param tusResumable Version du protocole
     * @param id identifiant du fichier
     */
    async getUploadOffset(tusResumable: any, id: string): Promise<AxiosResponse<void>>
    {
        const pathVariable = { 'id': id };
        return this.request({
            method: 'HEAD',
            endpoint: Utils.constructPath(pathVariable, '/resumable-file-uploads/files/{id}'),
            headers: { 'Tus-Resumable': tusResumable },
            params: {  },
            body: {}
        });
    }

    /**
     * L\'API tus-resumable-uploads accepte les requêtes PATCH contre toute URL de téléchargement et applique les octets contenus dans le message au décalage donné spécifié par l\'en-tête Upload-Offset. Toutes les requêtes PATCH DOIVENT utiliser Content-Type : application/offset+octet-stream, sinon l\'API resumable-uploads renvoi un status code 415 Unsupported Media Type.
     * Reprendre le téléchargement
     * @param tusResumable Version du protocole
     * @param contentLength Longueur du corps de la requête
     * @param uploadOffset L\&#39;en-tête de demande et de réponse Upload-Offset indique un décalage d\&#39;octet dans une ressource. La valeur DOIT être un entier non négatif.
     * @param id identifiant du fichier
     * @param uploadChecksum L\&#39;en-tête de demande Upload-Checksum contient des informations sur la somme de contrôle de la charge utile du corps actuel. L\&#39;en-tête DOIT être composé du nom de l\&#39;algorithme de somme de contrôle utilisé et de la somme de contrôle encodée en Base64 séparés par un espace.
     * @param body Contenu restant du fichier. Requis si Content-Length &gt; 0.
     */
    async patchFile(tusResumable: any, contentLength: number, uploadOffset: number, id: string, uploadChecksum?: string, body?: string): Promise<AxiosResponse<void>>
    {
        const pathVariable = { 'id': id };
        return this.request({
            method: 'PATCH',
            endpoint: Utils.constructPath(pathVariable, '/resumable-file-uploads/files/{id}'),
            headers: { 'Tus-Resumable': tusResumable, 'Content-Length': contentLength, 'Upload-Offset': uploadOffset, 'Upload-Checksum': uploadChecksum },
            params: {  },
            body: body
        });
    }
}
