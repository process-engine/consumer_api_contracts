namespace ProcessEngine.ConsumerAPI.Contracts.DataModel
{
    using System.Collections.Generic;

     /// <summary>
    /// Contains a list of events.
    /// </summary>
    public class EventList
    {
        /// <summary>
        /// The event list.
        /// </summary>
        public IEnumerable<Event> Events { get; set; }

        /// <summary>
        /// The total amount of records, before pagination was applied.
        /// </summary>
        /// <value></value>
        public int TotalCount { get; set; }
    }
}
