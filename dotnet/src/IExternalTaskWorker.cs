namespace ProcessEngine.ConsumerAPI.Contracts
{
    using System.Threading.Tasks;

    using ProcessEngine.ConsumerAPI.Contracts.DataModel;

    /// <summary>
    /// Definition of the HandleExternalTask Callback.
    /// </summary>
    public delegate Task<ExternalTaskResultBase> HandleExternalTaskAction<TPayload, TResult>(ExternalTask<TPayload> externalTask);

    /// <summary>
    /// Periodically fetches, locks and processes ExternalTasks for a given topic.
    /// </summary>
    public interface IExternalTaskWorker
    {
        /// <summary>
        /// The Id of the worker
        /// </summary>
        string WorkerId { get; }

        /// <summary>
        /// Tells the worker to start polling for ExternalTasks.
        /// </summary>
        void Start();

        /// <summary>
        /// Tells the worker to stop polling for ExternalTasks.
        /// </summary>
        void Stop();
    }
}
