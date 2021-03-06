# HTM-IT Model Swapper Configuration

[debugging]
# Controls whether to log performance profiling information: true or false
profiling = false


# Model Swapper Interface Bus
[interface_bus]

# Name of the queue for model command and inference results
results_queue = htm-it.mswapper.results

# A model's input queue name is the concatenation of this prefix and model id
model_input_queue_prefix = htm-it.mswapper.model.input.

# Name of the Model Scheduler notification queue
scheduler_notification_queue = htm-it.mswapper.scheduler.notification


[model_runner]
# The target number of model input request objects to be processed per
# checkpoint. This may span multiple batches, until the number of requests
# reaches or exceeds this value. Since it always processes all requests in a
# batch, the actual number of requests processed before checkpointing the model
# may be higher than this number.
target_requests_per_checkpoint = 500
