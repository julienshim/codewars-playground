# code away
class Song:
    
    def __init__(self, title, artist):
        self.title = title
        self.artist = artist
        self.listeners = []
        
    def how_many(self, listener_list):
        unique_listener_list = list(set([n.lower() for n in listener_list]))
        new_listeners = [n for n in unique_listener_list if n not in self.listeners]
        for user in new_listeners:
            if user not in self.listeners:
               self.listeners.append(user)
        return len(new_listeners)