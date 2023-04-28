use rusoto_core::{Region, RusotoError};
use rusoto_ec2::{DescribeInstancesRequest, DescribeInstancesResult, Ec2, Ec2Client, Filter};

// Define the filter for our request
let tag_filter = Filter {
    name: Some(String::from("tag:Environment")),
    values: Some(vec![String::from("production")]),
};

// Create the client
let ec2_client = Ec2Client::new(Region::UsEast1);

// Create the request with our filter and send it
let describe_instances_req = DescribeInstancesRequest {
    filters: Some(vec![tag_filter]),
    ..Default::default()
};
let describe_instances_result: Result<DescribeInstancesResult, RusotoError<DescribeInstancesError>> =
    ec2_client.describe_instances(describe_instances_req).await;

// Check if we got a valid response and print out the instance IDs
if let Ok(res) = describe_instances_result {
    let instances = res.reservations.iter().flat_map(|r| r.instances.clone()).collect::<Vec<_>>();
    for instance in &instances {
        println!("Instance ID: {}", instance.instance_id.as_ref().unwrap());
    }
}

use rusoto_core::{Region, RusotoError};
use rusoto_s3::{GetObjectRequest, ListObjectsV2Request, S3Client, S3};
use std::error::Error;

async fn list_objects(bucket: &str) -> Result<(), RusotoError<ListObjectsV2Output>>> {
    let client = S3Client::new(Region::default());
    let request = ListObjectsV2Request {
        bucket: bucket.to_string(),
        ..Default::default()
    };
    let result = client.list_objects_v2(request).await?;
    match result.contents {
        Some(objects) => {
            for object in objects {
                println!("Object Key: {}", object.key.unwrap());
            }
        }
        None => println!("No objects found in bucket."),
    }
    Ok(())
}

async fn get_object(
    bucket: &str,
    key: &str,
) -> Result<(), RusotoError<GetObjectOutput>> {
    let client = S3Client::new(Region::default());
    let request = GetObjectRequest {
        bucket: bucket.to_string(),
        key: key.to_string(),
        ..Default::default()
    };
    let result = client.get_object(request).await?;
    println!("Content-Type: {:?}", result.content_type);
    Ok(())
}
