# sudolab


SET @order = 0;
SET @hotelId = (SELECT count(rtt.hotel_id) AS count FROM pmscnf.rate_tbl rtt WHERE rtt.hotel_id = 3);
set @allll := (SELECT DISTINCT rate_tbl.hotel_id FROM pmscnf.rate_tbl);
UPDATE pmscnf.rate_tbl rt SET rt.display_order =
    CASE
        WHEN @order = (14) THEN @order:= 0 AND @hotelId := rt.hotel_id
        ELSE @order:= @order + 1
    END
WHERE rt.hotel_id IN @allll;

UPDATE pmscnf.rate_tbl rt SET rt.display_order = null WHERE rt.hotel_id = 3;

SELECT rt.hotel_id, rt.display_order FROM pmscnf.rate_tbl rt ORDER BY rt.hotel_id;


username: tothang97nbvn
password: Adepegmy28@utc...
aaPanel Internet Address: http://152.70.242.31:8888/b89f5c72
aaPanel Internal Address: http://10.0.0.43:8888/b89f5c72
