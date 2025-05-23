declare type Analog = number;

declare interface IAnalogEventAction extends IBaseEventAction<Analog> {
}

declare interface IAnalogState extends IBaseState<Analog> {
}

declare interface IAnalogSignal extends IBaseSignal<IAnalogState, IAnalogEventAction> {
}

declare type AnalogStateCallback = StateCallback<Analog>;

declare type Digital = boolean;

declare interface IDigitalEventAction extends IBaseEventAction<Digital> {
    push: () => void;
    release: () => void;
    click: () => void;
}

declare interface IDigitalState extends IBaseState<Digital> {
}

declare interface IDigitalSignal extends IBaseSignal<IDigitalState, IDigitalEventAction> {
}

declare type DigitalStateCallback = StateCallback<Digital>;

declare type Serial = string;

declare interface ISerialEventAction extends IBaseEventAction<Serial> {
}

declare interface ISerialState extends IBaseState<Serial> {
}

declare interface ISerialSignal extends IBaseSignal<ISerialState, ISerialEventAction> {
}

declare type SerialStateCallback = StateCallback<Serial>;

declare type StateCallback<T> = (value: T, signalName?: string) => void;

declare interface IStateSubscription {
    id: string;
    signalName: string;
}

declare interface IBaseEventAction<T> {
    setValue: (value: T) => void;
}

declare interface IBaseState<T> {
    value: T;
}

declare interface IBaseSignal<TState, TAction> {
    state: TState;
    action: TAction;
}

/**
 * `useCrestronAnalog` is a hook that returns an object with a state and action property.
 * @param {string} signalName - The name of the signal you want to use.
 * @param {AnalogStateCallback} [callback] - An optional callback function that will be called whenever the state of the signal
 * changes.
 * @returns An array with a single IAnalogSignal object.
 */
declare function useCrestronAnalog(signalName: string, callback?: AnalogStateCallback): [IAnalogSignal];

declare const useCrestronNumber: typeof useCrestronAnalog;

/**
 * `useCrestronDigital` is a hook that returns an object with a state and action property.
 * @param {string} signalName - The name of the signal you want to use.
 * @param {DigitalStateCallback} [callback] - An optional callback function that will be called whenever the state of the signal
 * changes.
 * @returns An array with a single IDigitalSignal object
 */
declare function useCrestronDigital(signalName: string, callback?: DigitalStateCallback): [IDigitalSignal];

declare const useCrestronBoolean: typeof useCrestronDigital;

/**
 * `useCrestronSerial` is a hook that returns an object with a state and action property.
 * @param {string} signalName - The name of the signal you want to use.
 * @param {SerialStateCallback} [callback] - An optional callback function that will be called whenever the state of the signal
 * changes.
 * @returns An array with a single ISerialSignal object.
 */
declare function useCrestronSerial(signalName: string, callback?: SerialStateCallback): [ISerialSignal];

declare const useCrestronString: typeof useCrestronSerial;

/**
 * `useCrestronAnalogCollection` is a hook that returns an array of objects each with state and action properties.
 * @param {string[]} signalNames - An array of strings that represent the names of the signals you want
 * to use.
 * @param {AnalogStateCallback} [callback] - A optional callback function that will be called whenever the state of
 * the signal changes.
 * @returns An array of IAnalogSignal objects.
 */
declare function useCrestronAnalogCollection(signalNames: string[], callback?: AnalogStateCallback): IAnalogSignal[];

declare const useCrestronNumberCollection: typeof useCrestronAnalogCollection;

/**
 * `useCrestronDigitalCollection` is a hook that returns an array of objects each with state and action properties.
 * @param {string[]} signalNames - An array of strings that represent the names of the signals you want
 * to use.
 * @param {DigitalStateCallback} [callback] - A optional callback function that will be called whenever the state of
 * the signal changes.
 * @returns An array of IDigitalSignal objects.
 */
declare function useCrestronDigitalCollection(signalNames: string[], callback?: DigitalStateCallback): IDigitalSignal[];

declare const useCrestronBooleanCollection: typeof useCrestronDigitalCollection;

/**
 * `useCrestronSerialCollection` is a hook that returns an array of objects each with state and action properties.
 * @param {string[]} signalNames - An array of strings that represent the names of the signals you want
 * to use.
 * @param {SerialStateCallback} [callback] - A optional callback function that will be called whenever the state of
 * the signal changes.
 * @returns An array of ISerialSignal objects.
 */
declare function useCrestronSerialCollection(signalNames: string[], callback?: SerialStateCallback): ISerialSignal[];

declare const useCrestronStringCollection: typeof useCrestronSerialCollection;

/**
 * `useCrestronPublishAnalog` is a hook that returns an object with a setValue function.
 * @param {string} signalName - The name of the signal you want to publish to.
 * @returns An array with a single IAnalogEventAction object.
 */
declare function useCrestronPublishAnalog(signalName: string): [IAnalogEventAction];

declare const useCrestronPublishNumber: typeof useCrestronPublishAnalog;

/**
 * `useCrestronPublishDigital` is a hook that returns an object with setValue, push, release and click functions.
 * @param {string} signalName - The name of the signal you want to publish to.
 * @returns An array with a single IDigitalEventAction object.
 */
declare function useCrestronPublishDigital(signalName: string): [IDigitalEventAction];

declare const useCrestronPublishBoolean: typeof useCrestronPublishDigital;

/**
 * `useCrestronPublishSerial` is a hook that returns an object with a setValue function.
 * @param {string} signalName - The name of the signal you want to publish to.
 * @returns An array with a single ISerialEventAction object.
 */
declare function useCrestronPublishSerial(signalName: string): [ISerialEventAction];

declare const useCrestronPublishString: typeof useCrestronPublishSerial;

/**
 * `useCrestronPublishAnalogCollection` is a hook that returns an array of objects each with a setValue function.
 * @param {string[]} signalNames - An array of strings that represent the names of the signals you want
 * to publish to.
 * @returns An array of IAnalogEventAction objects.
 */
declare function useCrestronPublishAnalogCollection(signalNames: string[]): IAnalogEventAction[];

declare const useCrestronPublishNumberCollection: typeof useCrestronPublishAnalogCollection;

/**
 * `useCrestronPublishDigitalCollection` is a hook that returns an array of objects each with setValue, push, release and click functions.
 * @param {string[]} signalNames - An array of strings that represent the names of the signals you want
 * to publish to.
 * @returns An array of IDigitalEventAction objects.
 */
declare function useCrestronPublishDigitalCollection(signalNames: string[]): IDigitalEventAction[];

declare const useCrestronPublishBooleanCollection: typeof useCrestronPublishDigitalCollection;

/**
 * `useCrestronPublishSerialCollection` is a hook that returns an array of objects each with a setValue function.
 * @param {string[]} signalNames - An array of strings that represent the names of the signals you want
 * to publish to.
 * @returns An array of ISerialEventAction objects.
 */
declare function useCrestronPublishSerialCollection(signalNames: string[]): ISerialEventAction[];

declare const useCrestronPublishStringCollection: typeof useCrestronPublishSerialCollection;

/**
 * `useCrestronSubscribeAnalog` is a hook that returns an object with a value property.
 * @param {string} signalName - The name of the signal you want to subscribe to.
 * @param {AnalogStateCallback} [callback] - An optional callback function that will be called whenever the state
 * changes.
 * @returns An array with a single IAnalogState object.
 */
declare function useCrestronSubscribeAnalog(signalName: string, callback?: AnalogStateCallback): [IAnalogState];

declare const useCrestronSubscribeNumber: typeof useCrestronSubscribeAnalog;

/**
 * `useCrestronSubscribeDigital` is a hook that returns an object with a value property.
 * @param {string} signalName - The name of the signal you want to subscribe to.
 * @param {DigitalStateCallback} [callback] - An optional callback function that will be called whenever the state
 * changes.
 * @returns An array with a single IDigitalState object.
 */
declare function useCrestronSubscribeDigital(signalName: string, callback?: DigitalStateCallback): [IDigitalState];

declare const useCrestronSubscribeBoolean: typeof useCrestronSubscribeDigital;

/**
 * `useCrestronSubscribeSerial` is a hook that returns an object with a value property.
 * @param {string} signalName - The name of the signal you want to subscribe to.
 * @param {SerialStateCallback} [callback] - An optional callback function that will be called whenever the state
 * changes.
 * @returns An array with a single ISerialState object.
 */
declare function useCrestronSubscribeSerial(signalName: string, callback?: SerialStateCallback): [ISerialState];

declare const useCrestronSubscribeString: typeof useCrestronSubscribeSerial;

/**
 * `useCrestronSubscribeAnalogCollection` is a hook that returns an array of objects each with a value property.
 * @param {string[]} signalNames - An array of strings that represent the names of the signals you want
 * to subscribe to.
 * @param {AnalogStateCallback} [callback] - An optional callback function that will be called whenever the
 * state changes.
 * @returns An array of IAnalogState objects.
 */
declare function useCrestronSubscribeAnalogCollection(signalNames: string[], callback?: AnalogStateCallback): IAnalogState[];

declare const useCrestronSubscribeNumberCollection: typeof useCrestronSubscribeAnalogCollection;

/**
 * `useCrestronSubscribeDigitalCollection` is a hook that returns an array of objects each with a value property.
 * @param {string[]} signalNames - An array of strings that represent the names of the signals you want
 * to subscribe to.
 * @param {DigitalStateCallback} [callback] - An optional callback function that will be called whenever the
 * state changes.
 * @returns An array of IDigitalState objects.
 */
declare function useCrestronSubscribeDigitalCollection(signalNames: string[], callback?: DigitalStateCallback): IDigitalState[];

declare const useCrestronSubscribeBooleanCollection: typeof useCrestronSubscribeDigitalCollection;

/**
 * `useCrestronSubscribeSerialCollection` is a hook that returns an array of objects each with a value property.
 * @param {string[]} signalNames - An array of strings that represent the names of the signals you want
 * to subscribe to.
 * @param {SerialStateCallback} [callback] - An optional callback function that will be called whenever the
 * state changes.
 * @returns An array of ISerialState objects.
 */
declare function useCrestronSubscribeSerialCollection(signalNames: string[], callback?: SerialStateCallback): ISerialState[];

declare const useCrestronSubscribeStringCollection: typeof useCrestronSubscribeSerialCollection;

export { type Analog, type AnalogStateCallback, type Digital, type DigitalStateCallback, type IAnalogEventAction, type IAnalogSignal, type IAnalogState, type IBaseEventAction, type IBaseSignal, type IBaseState, type IDigitalEventAction, type IDigitalSignal, type IDigitalState, type ISerialEventAction, type ISerialSignal, type ISerialState, type IStateSubscription, type Serial, type SerialStateCallback, type StateCallback, useCrestronAnalog, useCrestronAnalogCollection, useCrestronBoolean, useCrestronBooleanCollection, useCrestronDigital, useCrestronDigitalCollection, useCrestronNumber, useCrestronNumberCollection, useCrestronPublishAnalog, useCrestronPublishAnalogCollection, useCrestronPublishBoolean, useCrestronPublishBooleanCollection, useCrestronPublishDigital, useCrestronPublishDigitalCollection, useCrestronPublishNumber, useCrestronPublishNumberCollection, useCrestronPublishSerial, useCrestronPublishSerialCollection, useCrestronPublishString, useCrestronPublishStringCollection, useCrestronSerial, useCrestronSerialCollection, useCrestronString, useCrestronStringCollection, useCrestronSubscribeAnalog, useCrestronSubscribeAnalogCollection, useCrestronSubscribeBoolean, useCrestronSubscribeBooleanCollection, useCrestronSubscribeDigital, useCrestronSubscribeDigitalCollection, useCrestronSubscribeNumber, useCrestronSubscribeNumberCollection, useCrestronSubscribeSerial, useCrestronSubscribeSerialCollection, useCrestronSubscribeString, useCrestronSubscribeStringCollection };
