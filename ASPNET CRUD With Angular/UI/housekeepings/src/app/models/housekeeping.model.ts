export interface HouseKeeping{
    id:string;
    name:string;
    date:string;
    timeReq:string;
    timeIn:string;
    timeOut:string;
    feedback:string;
    complaint:string;
    serviceRequest:string;
    serviceIsApproved:string;
    

};
export interface Feedback{
    id:string;
feedback:string;
    complaint:string;
}