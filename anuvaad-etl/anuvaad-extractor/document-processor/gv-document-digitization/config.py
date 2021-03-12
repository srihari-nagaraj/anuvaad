#import logging
import os
import time

DEBUG = False
API_URL_PREFIX = "/anuvaad-etl/document-processor/gv-document-digitization"
HOST = '0.0.0.0'
PORT = 5001
BASE_DIR      = 'upload'
#BASE_DIR      = '/home/naresh/anuvaad/anuvaad-etl/anuvaad-extractor/document-processor/gv-document-digitization/upload'

ENABLE_CORS = False

# kafka

input_topic_default = 'anuvaad-dp-tools-gv-document-digitization-input-v1'
input_topic_identifier = 'KAFKA_ANUVAAD_DP_TOOLS_GV_DOCUMENT_DIGITIZATION_INPUT'
input_topic = os.environ.get(input_topic_identifier, input_topic_default)

output_topic_default = 'anuvaad-dp-tools-gv-document-digitization-output-v1'
output_topic_identifier = 'KAFKA_ANUVAAD_DP_TOOLS_GV_DOCUMENT_DIGITIZATION_OUTPUT'
output_topic = os.environ.get(output_topic_identifier, output_topic_default)

kf_local_server     = 'localhost:9092'
kafka_ip_host       = 'KAFKA_BOOTSTRAP_SERVER_HOST'
bootstrap_server    = os.environ.get(kafka_ip_host, kf_local_server)

TASK_STAT           = 'GV-DOCUMENT-DIGITIZATION'

CONSUMER_GROUP_default       = 'anuvaad-etl-gv-document-digitization-consumer-group'
CONSUMER_GROUP_identifier    = 'ANUVAAD_ETL_TESS_CONSUMER_GROUP_V1'
CONSUMER_GROUP               = os.environ.get(CONSUMER_GROUP_identifier,CONSUMER_GROUP_default)
# API_URL_PREFIX = "/anuvaad-etl/document-processor/ocr/google-vision"
# HOST = '0.0.0.0'
# PORT = 5001
# BASE_DIR      = 'upload'

# ENABLE_CORS = False

# # kafka

# input_topic_default = 'anuvaad-dp-tools-ocr-google-vision-input-v1'
# input_topic_identifier = 'KAFKA_ANUVAAD_DP_TOOLS_OCR_GOOGLE_VISION_INPUT'
# input_topic = os.environ.get(input_topic_identifier, input_topic_default)

# output_topic_default = 'anuvaad-dp-tools-ocr-google-vision-output-v1'
# output_topic_identifier = 'KAFKA_ANUVAAD_DP_TOOLS_OCR_GOOGLE_VISION_OUTPUT'
# output_topic = os.environ.get(output_topic_identifier, output_topic_default)

# kf_local_server     = 'localhost:9092'
# kafka_ip_host       = 'KAFKA_BOOTSTRAP_SERVER_HOST'
# bootstrap_server    = os.environ.get(kafka_ip_host, kf_local_server)

# TASK_STAT           = 'GOOGLE-VISION-OCR'

# CONSUMER_GROUP_default       = 'anuvaad-etl-gvocr-consumer-group'
# CONSUMER_GROUP_identifier    = 'ANUVAAD_ETL_GVOCR_CONSUMER_GROUP_V1'
# CONSUMER_GROUP               = os.environ.get(CONSUMER_GROUP_identifier,CONSUMER_GROUP_default)
download_folder = 'upload'
#
#
# logging.basicConfig(
#     filename=os.getenv("SERVICE_LOG", "server.log"),
#     level=logging.DEBUG,
#     format="%(levelname)s: %(asctime)s \
#         pid:%(process)s module:%(module)s %(message)s",
#     datefmt="%d/%m/%y %H:%M:%S",
# )
EXRACTION_RESOLUTION  =  300