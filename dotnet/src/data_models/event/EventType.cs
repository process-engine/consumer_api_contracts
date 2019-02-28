namespace ProcessEngine.ConsumerAPI.Contracts.DataModel
{
    using System.Collections.Generic;

    /// <summary>
    /// Contains the possible types of events.
    /// </summary>
    public class EventType
    {
        public static string MessageEvent = "messageEvent";
        public static string SignalEvent = "signalEvent";
        public static string TerminateEvent = "terminateEvent";
        public static string TimerEvent = "timerEvent";
        public static string ErrorEvent = "errorEvent";
    }
}
