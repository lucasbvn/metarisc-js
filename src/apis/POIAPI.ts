import { Core, MetariscConfig } from "../core";
import Utils from "../utils";
import type { AxiosResponse } from 'axios';
import { POI } from '../../src/models/POI';
import { PaginateContacts200Response } from '../../src/models/PaginateContacts200Response';
import { PaginateHistorique200Response } from '../../src/models/PaginateHistorique200Response';
import { PaginatePoi200Response } from '../../src/models/PaginatePoi200Response';

/**
 * no description
 */
export class POIAPI extends Core {
    constructor(config : MetariscConfig) {
        super(config);
    }

    /**
     * Récupération de l\'ensemble des données d\'un POI.
     * Récupération des détails d\'un POI
     * @param poiId ID du POI
     */
    async getPoi(poiId: string): Promise<AxiosResponse<POI>>
    {
        const pathVariable = { 'poi_id': poiId };
        return this.request({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/poi/{poi_id}'),
            headers: {  },
            params: {  },
            body: {}
        });
    }

    /**
     * Récupération de la liste des contacts d\'un POI.
     * Liste des contacts
     * @param poiId ID du POI
     */
    paginateContacts(poiId: string): AsyncGenerator<PaginateContacts200Response>
    {
        const pathVariable = { 'poi_id': poiId };
        return this.autoPagingIterator({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/poi/{poi_id}/contacts'),
            headers: {  },
            params: {  },
            body: {}
        });
    }

    /**
     * Récupération de l\'historique d\'un POI.
     * Historique d\'un POI
     * @param poiId ID du POI
     */
    paginateHistorique(poiId: string): AsyncGenerator<PaginateHistorique200Response>
    {
        const pathVariable = { 'poi_id': poiId };
        return this.autoPagingIterator({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/poi/{poi_id}/historique'),
            headers: {  },
            params: {  },
            body: {}
        });
    }

    /**
     * Récupération de la liste des pièces jointes d\'un POI.
     * Liste des pièces jointes
     * @param poiId ID du POI
     */
    paginatePiecesJointes(poiId: string): AsyncGenerator<PaginateContacts200Response>
    {
        const pathVariable = { 'poi_id': poiId };
        return this.autoPagingIterator({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/poi/{poi_id}/pieces_jointes'),
            headers: {  },
            params: {  },
            body: {}
        });
    }

    /**
     * Récupération de la liste des POI selon des critères de recherche.
     * Liste des POI
     */
    paginatePoi(): AsyncGenerator<PaginatePoi200Response>
    {
        const pathVariable = {  };
        return this.autoPagingIterator({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/poi/'),
            headers: {  },
            params: {  },
            body: {}
        });
    }

    /**
     * Modifier un POI existant.
     * Modifier un POI
     * @param poiId ID du POI
     */
    async patchPoi(poiId: string): Promise<AxiosResponse<POI>>
    {
        const pathVariable = { 'poi_id': poiId };
        return this.request({
            method: 'PATCH',
            endpoint: Utils.constructPath(pathVariable, '/poi/{poi_id}'),
            headers: {  },
            params: {  },
            body: {}
        });
    }
}
