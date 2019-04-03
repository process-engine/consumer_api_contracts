namespace ProcessEngine.ConsumerAPI.Contracts.DataModel
{
    using System.Collections.Generic;

    /// <summary>
    /// Contains the possible types of events.
    /// </summary>
    public enum EventType
    {
        /// <summary>
        /// The event is a MessageEvent.
        /// </summary>
        messageEvent,

        /// <summary>
        /// The event is a SignalEvent.
        /// </summary>
        signalEvent,

        /// <summary>
        /// The event is a TerminateEvent.
        /// </summary>
        terminateEvent,

        /// <summary>
        /// The event is a TimerEvent.
        /// </summary>
        timerEvent,

        /// <summary>
        /// The event is a ErrorEvent.
        /// </summary>
        errorEvent,
    }
}
