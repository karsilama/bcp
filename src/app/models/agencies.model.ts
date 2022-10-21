export class Agency {
	public agencia: string;
	public distrito: string;
	public provincia: string;
	public departamento: string;
	public direccion: string;
	public lat: number;
	public lng: number;
	public image?: string;
	public favorite?: boolean;
}

export interface IAgencyRow {
	handleFavoriteClick(agency: Agency): void;
	handleDirection(agency: Agency): void;
	handleOnClickRow(agency: Agency): void;
}