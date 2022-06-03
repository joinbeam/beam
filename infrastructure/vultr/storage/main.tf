terraform {
  required_providers {
    vultr = {
      source = "vultr/vultr"
      version = "2.11.2"
    }
  }
}

resource "vultr_object_storage" "tf" {
    cluster_id = 2
    label = "beam"
}