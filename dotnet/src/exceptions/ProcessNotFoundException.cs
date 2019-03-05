namespace ProcessEngine.ConsumerAPI.Contracts.Exceptions
{
    using System;

     public class ProcessNotFoundException : Exception
    {
        public ProcessNotFoundException()
        {
        }

         public ProcessNotFoundException(string message)
            : base(message)
        {
        }

         public ProcessNotFoundException(string message, Exception inner)
            : base(message, inner)
        {
        }
    }
}
