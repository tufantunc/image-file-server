const generateOptionsFromUrl = require('../components/generate-options-from-url');
const path = require('path');

describe('generate options from url component', () => {
    const options = generateOptionsFromUrl('/i/demo/75/600x400/kapadokya/balonlar.jpg'.split('/'), null, path.resolve(__dirname, '../'));
    it('should return basefolder', (done) => {
        expect(options.hasOwnProperty('baseFolder')).toBeTruthy();
        expect(options.baseFolder).toBe('demo');
        done();
    });

    it('should return quality', (done) => {
        expect(options.hasOwnProperty('quality')).toBeTruthy();
        expect(options.quality).toBe(75);
        done();
    });

    it('should return size', (done) => {
        expect(options.hasOwnProperty('size')).toBeTruthy();
        expect(options.size.hasOwnProperty('width')).toBeTruthy();
        expect(options.size.hasOwnProperty('height')).toBeTruthy();
        expect(options.size.width).toBe(600);
        expect(options.size.height).toBe(400);
        done();
    });

    it('should return path', (done) => {
        expect(options.hasOwnProperty('path')).toBeTruthy();
        expect(options.path).toBe(path.resolve(__dirname, '../demo/kapadokya/balonlar.jpg'));
        done();
    });

    it('should return image name', (done) => {
        expect(options.hasOwnProperty('imageName')).toBeTruthy();
        expect(options.imageName).toBe('balonlar.jpg');
        done();
    });

    it('should return image format', (done) => {
        expect(options.hasOwnProperty('format')).toBeTruthy();
        expect(options.format).toBe('jpg');
        done();
    });
});