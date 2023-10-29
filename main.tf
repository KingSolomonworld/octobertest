provider "aws" {
  # access_key = "AKIA4YSWHGDDEJUACDWY"
  # secret_key = "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"
  region = "us-west-2"
}

resource "aws_vpc" "test_vpc" {
  cidr_block = "10.0.0.0/16"
}

