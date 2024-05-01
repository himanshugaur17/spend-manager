export type ChangeEventPayload = {
  value: string;
};

export type AndroidSmsManagerViewProps = {
  name: string;
};
//class SmsInfo(var id:String, var from: String, var date: String,  var subject:String, var body: String)
export type SmsInfo = {
  id: string;
  from: string;
  date: string;
  subject: string;
  body: string;
};
