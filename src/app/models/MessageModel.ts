export class MessageModel {

  private _name: string;
  private _email: string;
  private _message: string;
  private _messageType: string;
  private _deviceType: string;
  private _versionNumber: string;

  public constructor() {
    this._name = '';
    this._email = '';
    this._deviceType = '';
    this._versionNumber = '';
    this._messageType = '';
    this._message = '';
  }

  public get name(): string {
    return this._name;
  }

  public set name(name) {
    this._name = name;
  }

  public get email(): string {
    return this._email;
  }

  public set email(email) {
    this._email = email;
  }

  public get message(): string {
    return this._message;
  }

  public set message(message) {
    this._message = message;
  }

  public get versionNumber(): string {
    return this._versionNumber;
  }

  public set versionNumber(versionNumber) {
    this._versionNumber = versionNumber;
  }

  public get messageType(): string {
    return this._messageType;
  }

  public set messageType(messageType) {
    this._messageType = messageType;
  }

  public get deviceType(): string {
    return this._deviceType;
  }

  public set deviceType(deviceType) {
    this._deviceType = deviceType;
  }

}
