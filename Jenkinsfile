pipeline {
    agent {
        docker {
            image 'node:8-alpine' 
            args '-p 5000:5000' 
        }
    }
    stages {
        stage('Build') { 
            steps {
                sh 'npm install' 
            }
        }
		stage('Deliver') {
            steps {
				sh 'chmod 755 ./scripts/deliver.sh'
				sh 'chmod 755 ./scripts/kill.sh'
				sh 'pwd'
                sh 'sh ./scripts/deliver.sh'
                input message: 'Finished using the web site? (Click "Proceed" to continue)'
                sh 'sh ./scripts/kill.sh'
            }
        }
    }
}
