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
        MessageEvent,

        /// <summary>
        /// The event is a SignalEvent.
        /// </summary>
        SignalEvent,

        /// <summary>
        /// The event is a TerminateEvent.
        /// </summary>
        TerminateEvent,

        /// <summary>
        /// The event is a TimerEvent.
        /// </summary>
        TimerEvent,

        /// <summary>
        /// The event is a ErrorEvent.
        /// </summary>
        ErrorEvent,
    }
}
