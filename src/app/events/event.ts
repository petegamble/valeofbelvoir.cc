export interface IEvent{
    id: number;
    title: string;
    date: string; 
    level: string;
    distance: number;  
    imageUrl: string;
    rating: number;
}

/*export class Event implements IEvent {
    constructor(
        public title: string,
        public date: string, 
        public level: string,
        public distance: number, 
        public imageUrl: string,  
    ){
        
    }

    updateAttendance(string: user, string status){
        
    }
}*/