import axios from "axios";

interface HasId {
    id?: number;
};

export class Sync<T extends HasId> {
    constructor(public rootUrl: string) {};

    fetch = async (id: number): Promise<T> => {
        const { data }: { data: Promise<T> } = await axios.get(`${this.rootUrl}/${id}`);
        
        return data;
    };

    save = async (data: T): Promise<T> => {
        const { id } = data;

        if (id) {
            const { data: resultData }: { data: Promise<T> } = await axios.put(`${this.rootUrl}/${id}`, data);
            return resultData;
        } else {
            const { data: resultData }: { data: Promise<T> } = await axios.post(this.rootUrl, data);
            return resultData;
        };
    };
};