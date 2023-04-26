export interface AccordianModel {
    events: EventsModel[];
    status: StatusModel[];
}

export interface EventsModel {
    id: number, 
    name: string
}

export interface StatusModel {
    type: string,
    name: string
}