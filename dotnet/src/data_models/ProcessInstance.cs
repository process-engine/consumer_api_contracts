using EssentialProjects.IAM.Contracts;

namespace ProcessEngine.ConsumerAPI.Contracts
{
    public class ProcessInstance
    {
        public string id { get; set; }
        public IIdentity owner { get; set; }
        public string correlationId { get; set; }
        public object processModelId { get; set; }
        public object parentProcessInstanceId { get; set; }
    }
}