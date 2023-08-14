import boto3
import logging
import os


#Listing all Buckets Present
def list_bucket():
    # Create bucket
    try:
        s3 = boto3.client('s3')
        response = s3.list_buckets()
        if response:
            print('Buckets exists..')
            for bucket in response['Buckets']:
                print(f'  {bucket["Name"]}')

    except Exception as e:
        logging.error(e)
        return False
    return True
list_bucket()

def create_bucket(bucket_name, region=None):
    try:
        if region is None:
            s3_client = boto3.client('s3')
            s3_client.create_bucket(Bucket=bucket_name)
        else:
            s3_client = boto3.client('s3', region_name=region)
            location = {'LocationConstraint': region}
            s3_client.create_bucket(Bucket=bucket_name,
                                    CreateBucketConfiguration=location)
    except Exception as e:
        logging.error(e)
        return False
    return True


result_create = create_bucket("bs3s4s5s6s7")
if result_create :
    print("bucket got created successfully..!")
else:
    print("bucket got created failed..!")

list_bucket()


