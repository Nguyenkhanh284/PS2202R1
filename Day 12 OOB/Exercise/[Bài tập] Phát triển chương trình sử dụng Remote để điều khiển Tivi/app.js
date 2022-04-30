
class Remote {
    constructor(chanel, volume, status) {
        this.chanel = chanel;
        this.volume = volume;
        this.status = status;
    }
    getChanel() {
        return this.chanel;
    }
    getVolume() {
        return this.volume
    }
    getStatus() {
        return this.status;
    }
    setChanel(chanel) {
        this.chanel = chanel;
    }
    setVolume(volume) {
        this.volume = volume;
    }
    setStatus(status) {
        this.status = status;
    }
}

class Tivi {
    constructor(chanel, volume, status) {
        this.chanel = chanel;
        this.volume = volume;
        this.status = status;
    }
    getChanel() {
        return this.chanel;
    }
    getVolume() {
        return this.volume;
    }
    getStatus() {
        return this.status;
    }
    setRemote(remote) {
        this.remote = remote;
    }
    setChanel(remote) {
        this.chanel = remote.getChanel()
    }
    setVolume(remote) {
        this.volume = remote.getVolume()
    }
    setStatus(remote) {
        this.status = remote.getStatus()
    }
}
let remote = new Remote(2, 4, true);
remote.setChanel(parseFloat(prompt('Moi nhap kenh')));
remote.setVolume(parseFloat(prompt('Moi nhap volume')));
remote.setStatus(prompt('Bat TV'));
console.log(remote);
let tivi = new Tivi(1, 0, false);
tivi.setChanel(remote);
tivi.setVolume(remote);
tivi.setStatus(remote);
console.log(tivi);
