import os

#CROSS-MODULE-COMMON-CONFIGS
kafka_bootstrap_server_host = os.environ.get('KAFKA_CLUSTER_DETAILS', 'localhost:9092')
mongo_server_host = os.environ.get('MONGO_CLIENT', 'mongodb://localhost:27017/')
file_upload_url = os.environ.get('FILE_UPLOAD_URL', 'https://auth.anuvaad.org/upload')


#MODULE-SPECIFIC-CONFIGS
#common-variables
align_job_topic = "anuvaad-etl-alignment-jobs-v6"
anu_dp_wf_aligner_in_topic = "anuvaad-dp-tools-aligner-input-v2"
anu_dp_wf_aligner_out_topic = "anuvaad-dp-tools-aligner-output-v2"

#kafka-configs
align_job_consumer_grp = os.environ.get('ANU_ETL_WF_CONSUMER_GRP', 'anu-etl-align-consumer-group')

#datastore-configs
mongo_alignment_db = os.environ.get('MONGO_ETL_ALIGNMENT_DB', 'anuvaad-etl')
mongo_alignment_col = os.environ.get('MONGO_ETL_ALIGNMENT_COL', 'extractor-aligner')

#module-configs
context_path = os.environ.get('SA_CONTEXT_PATH', '/anuvaad-etl/extractor/aligner')
directory_path = os.environ.get('SA_DIRECTORY_PATH', r'C:\Users\Vishal\Desktop\anuvaad\Facebook LASER\resources\Input\length-wise')
laser_url = os.environ.get('LASER_PATH', 'http://127.0.0.1:8050/vectorize')
no_of_processes = os.environ.get("ALIGNER_NO_OF_PARALLEL_PROC", 5)
