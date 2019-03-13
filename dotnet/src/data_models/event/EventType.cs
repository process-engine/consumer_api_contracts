namespace ProcessEngine.ConsumerAPI.Contracts.DataModel
{
    using System.Collections.Generic;

    /// <summary>
    /// Contains the possible types of events.
    /// </summary>
    public class EventType
    {
        /// <summary>
        /// The event is a MessageEvent.
        /// </summary>
        public static readonly string MessageEvent = "messageEvent";

        /// <summary>
        /// The event is a SignalEvent.
        /// </summary>
        public static readonly string SignalEvent = "signalEvent";

        /// <summary>
        /// The event is a TerminateEvent.
        /// </summary>
        public static readonly string TerminateEvent = "terminateEvent";

        /// <summary>
        /// The event is a TimerEvent.
        /// </summary>
        public static readonly string TimerEvent = "timerEvent";

        /// <summary>
        /// The event is a ErrorEvent.
        /// </summary>
        public static readonly string ErrorEvent = "errorEvent";
    }
}
