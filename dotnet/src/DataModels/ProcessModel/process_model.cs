namespace ProcessEngine.ConsumerAPI.Contracts.DataModel
{
    using System.Collections.Generic;

    /// <summary>
    /// Describes a ProcessModel.
    /// </summary>
    public class ProcessModel
    {
        /// <summary>
        /// The ProcessModel's ID.
        /// </summary>
        public string ID { get; set; }

        /// <summary>
        /// A list of accessible StartEvents provided by the ProcessModel.
        /// </summary>
        public List<Event> StartEvents { get; set; }

        /// <summary>
        /// A list of accessible EndEvents provided by the ProcessModel.
        /// </summary>
        public List<Event> EndEvents { get; set; }
    }
}
