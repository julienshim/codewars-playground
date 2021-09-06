SELECT
  ID,
  CASE
    WHEN desired_height <= up_speed THEN 1
    ELSE CAST(
            CEIL(
              CAST(desired_height - up_speed AS decimal) / (up_speed - down_speed)
            ) 
          AS integer) + 1
  END as num_days
from growing_plant;