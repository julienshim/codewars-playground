from datetime import datetime, timedelta

def movie_times(open, close, length):
    format = '%H:%M'
    buffer_in_seconds = 15 * 60
    length_in_seconds = length * 60
    
    showtimes = []
    
    showtime_hh_mm = datetime.strptime(f'{open}:00', format)
    close_hh_mm = datetime.strptime(f'{close}:00', format)
    close_hh_mm_dt = showtime_hh_mm + timedelta(hours = 24 - open + close)
    
    close = close_hh_mm if close > open else  close_hh_mm_dt
            
    while (close - showtime_hh_mm).total_seconds() - length_in_seconds >= 0:
        
        showtime_tuple = tuple(list(map(lambda x: int(x), showtime_hh_mm.strftime('%H:%M').split(':'))))
        showtimes.append(showtime_tuple)
        
        showtime_hh_mm += timedelta(seconds = length_in_seconds + buffer_in_seconds)

    return showtimes